import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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
         this.props.handleTotal(this.props.price)
      }

      remover(){
        this.setState({
           qtd: this.state.qtd - 1
        });
        this.props.handleTotal(-this.props.price)
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
                       <p className="txtquantidade">Quantidade:</p> {this.state.qtd}
                   </div>   
                     
                   <div className="row btn-toolbar">
                       <div className="col-6">
                             <button className="botaoinfo" onClick={this.mostrarInfo}>Informações do Produto</button>
                       </div>

                       <div className="col-6 text-right">
                             <button className="botaoadd" onClick={this.add}>Adicionar +1</button>&nbsp;
                             <button className="botaoremove" onClick={this.remover} disabled={this.state.qtd < 1}>Remover -1</button>
                       </div>
                   </div>    
               </div>
               <hr/>
          </div>
       );
     }
 }

// Segundo Componente
class Total extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let total = this.props.total.toFixed(2);
    return(
        <div className="divTotal">
            <h3 className="row">
              <span className="col-6">Valor total dos Produtos</span>
              <span className="col-6">R$:{total}</span>
            </h3>
            
        </div>
    );
  }
}

// Terceiro Componente
class ProductList extends React.Component{
  constructor(props){
   super(props);
     this.state={
        ProductList: "",
        total: 0
      };
      this.calcularTotal = this.calcularTotal.bind(this);
    }

    componentDidMount(){
     setTimeout(() => {
        this.setState({productList: productList})
     },1000);
    }

    calcularTotal(price){
        this.setState({
           total: this.state.total + price 
        });
    }

    render(){
      if (!this.state.productList) return <p>Carregando Produtos...</p>

      var component = this; 
      var products = this.state.productList.map(function(product){
          return(
            <Product name={product.name}price={product.price}info={product.info} handleTotal={component.calcularTotal}/>
          );
      });  
       
      return(
         <div>
         {products}
         <Total total ={this.state.total}/>
         </div>
       );
    }
  }


function App() {
  return (
    <div className="container">
      <ProductList/>    
    </div>
  );
}

export default App;
