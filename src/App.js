import React, { Component } from "react";

import "./styles.css";

export default class App extends Component {
  state = {
    numero: 0,
    roupas: [
      {
        id: 1,
        camiseta: "camiseta ombro caído Listrado",
        preço: 79.9,
        img:
          "https://img.ltwebstatic.com/images3_pi/2022/06/07/165456327982fd12cd963adb41b1bb0eeb9d53f0a7_thumbnail_600x.webp",
        alt: "Menina com bone e camisa branca com listra azul"
      },
      {
        id: 1,
        camiseta: "Cordão Bolso Carta ocasional Suéter",
        preço: 121.99,
        img:
          "https://img.ltwebstatic.com/images3_pi/2022/02/11/1644574470b4bbbdcbfba521450af9ee9fb6a88ed4_thumbnail_600x.webp",
        alt: "Extended Sizes Cordão Bolso Carta ocasional Suéter"
      }
    ]
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  dim = () => {
    if (this.state.numero) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        {this.state.roupas.map((roupas) => (
          <section key={roupas.id}>
            <h1>{roupas.camiseta}</h1>
            <img src={roupas.img} alt={roupas.alt} />
            <p> Preço : R$ {roupas.preço}</p>
            <p>10 Produtos disponiveis para compra</p>
            <h3>Quantidades de itens adicionados :{this.state.numero}</h3>
            <div>
              <button className="dim" onClick={this.dim}>
                -
              </button>
              <button className="add" onClick={this.add}>
                +
              </button>
            </div>
          </section>
        ))}
        ;
      </>
    );
  }
}
