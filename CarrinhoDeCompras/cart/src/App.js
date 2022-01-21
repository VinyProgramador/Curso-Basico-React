import logo from './logo.svg';
import './App.css';
import React from 'react';

let productList =[
    {name: "PSP", price:700, info:"PlayStation Portable(PSP), fabricado pela Sony."},
    {name: "Triologia God-of-War", price:300, info:"fabricado pela Santa Monica está triologia é um exclusivo do PlayStation."},
    {name: "Marvel's Spider-Man", price:250, info:"fabricado pela Insomniac Games este jogo é um exclusivo do PlayStation."}
];

class Product extends React.Component{
       constructor(props){
        super(props);
          this.state={
             qtd:0
          };
          //  Criando eventos do carrinho:
          this.add = this.add.bind(this);
          this.remover = this.remover.bind(this);
          this.mostrarInfo = this.mostrarInfo.bind(this);
       }   
      
      add(){
         this.setState({
            qtd: this.state.qtd + 1
         });
      }

      remover(){
        this.setState({
           qtd: this.state.qtd - 1
        });
     }

     mostrarInfo(){
      alert(this.props.info);
    }
     render(){
       return(
          <div>
               <div className="row form-group">
                   <div className="col-sm-10">
                      <h5>{this.props.name}: Valor{this.props.price}</h5>
                   </div>
                   <div className="col-sm-2 text-right">
                       Quantidade: {this.state.qtd}
                   </div>   
                     
                   <div className="row btn-toolbar">
                       <div className="col-6">
                             <button onClick={this.mostrarInfo}>Informações do Produto</button>
                       </div>

                       <div className="col-6 text-right">
                             <button onClick={this.add}>Adicionar +1</button>
                             <button onClick={this.remover} disabled={this.state.qtd < 1}>Remover -1</button>
                       </div>
                   </div>    
               </div>
               <hr/>
          </div>
       );
     }
 }
// Segundo Componente
class ProductList extends React.Component{
  constructor(props){
   super(props);
     this.state={
        ProductList: ""
      };
    }

    componentDidMount(){
     setTimeout(() => {
        this.setState({productList: productList})
     },1000);
    }

    render(){
      if (!this.state.productList) return <p>Carregando Produtos...</p>

      var component = this; 
      var products = this.state.productList.map(function(product){
          return(
            <Product name={product.name}
            price={product.price}
            info={product.info}/>
          );
      });  
       return(
         <div>
         {products}
         </div>
       );
    }
  }


function App() {
  return (
    <div>
      <ProductList/>    
    </div>
  );
}

export default App;
