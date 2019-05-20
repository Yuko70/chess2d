import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import * as firebase from 'firebase/app';
// import 'firebase/auth'
require('firebase/auth')

import Board from './board.js';

import Figure from './figure.js';

import { database } from "./config";



let mouse = null;
// let canvasRef = null;

// registracia uzivatela
// prihlasenie uzivatela
// nasledne si vylistuje podla mena svoje rozohrate partie a vyberie si partiu ktoru bude hrat - cize nacitanie a ulozenie partie plus nejaky dizajn(responyiv)


class Canvas extends React.Component {

  constructor() {
    this.play = 1;
    this.move = 0;
    this.player = 0; // 0 white
    this.selected = null;

    this.click = null;

    this.cWidth = 480;
    this.cHeight = 480;

    this.imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';
    this.fieldW = new Image();
    this.fieldG = new Image();
    this.fieldB = new Image();
    this.fieldLB = new Image();
    this.fieldR = new Image();

    this.board = new Board();

    this.prevS = null;
    this.prevSx = null;
    this.prevSy = null;
    this.prevD = null;
    this.prevDx = null;
    this.prevDy = null;

  }

  click(e){
    console.log(e);
  }

  componentDidMount() {
    this.ctx = document.getElementById('canvas').getContext("2d");
    this.ctx.fillStyle = "#FFF000";

    document.getElementById('canvas').onclick = function() { mouse = event; }

    this.fieldW.src = this.imageAdress + 'whitegb.png';
    this.fieldG.src = this.imageAdress + 'greygb.png';
    this.fieldB.src = this.imageAdress + 'bluegb.png';
    this.fieldLB.src = this.imageAdress + 'lightbluegb.png';
    this.fieldR.src = this.imageAdress + 'redgb.png';

    requestAnimationFrame(() => {this.updateCanvas()});

    // this.db1 = database
    //   .collection("names")
    //   .doc('data').onSnapshot((snapshot) => {
    //     this.Data = snapshot.data().names;
    //   })

  }

  updateCanvas() {
    // Herna plochagp
    this.ctx.fillRect(0, 0, 480, 480);
    for ( let i = 0 ; i < 64 ; i+=1 ) {
      if ( (i+parseInt(i/8))%2 === 0 ) this.ctx.drawImage(this.fieldW, 60*(i%8), 60*parseInt(i/8));
      else this.ctx.drawImage(this.fieldG, 60*(i%8), 60*parseInt(i/8));
    }
    
    // MOUSE
    if (mouse !== null) {
      let mx = Math.floor(mouse.x / 60);
      let my = Math.floor(mouse.y / 60);
      

      if ( mx >= 0 && mx <= 7 && my >= 0 && my <= 7 ) {
        let X = mx;
        let Y = my;
        if ( this.player ) { X = 7-X; Y = 7-Y; }


        if ( this.click === null && this.board.arr[Y][X] !== null && this.board.arr[Y][X].color === this.player  && this.move !== 1){
          this.click = {x: X, y: Y};
          this.selected = this.board.arr[Y][X];
          this.selected.options( this.board.arr, X, Y );

        }
        else if ( this.click !== null && X === this.click.x && Y === this.click.y ) {
          this.click = null;
          this.selected = null;
        }
        else if (this.click !== null && this.move !== 1) {
           if ( (this.selected.opt.some(item => item.x === X) && this.selected.opt.some(item => item.y === Y)) || 
                (this.selected.att.some(item => item.x === X) && this.selected.att.some(item => item.y === Y)) ) {

            this.prevS = this.board.arr[this.click.y][this.click.x];
            this.prevSx = this.click.x;
            this.prevSy = this.click.y;
            this.prevD = this.board.arr[Y][X];
            this.prevDx = X;
            this.prevDy = Y;


            this.board.arr[Y][X] = this.board.arr[this.click.y][this.click.x];
            this.board.arr[this.click.y][this.click.x] = null;
            this.click = null;
            this.selected = null;
            this.move = 1;
           }
        }
      }
      
      mouse = null; 
    }

    if ( this.click !== null ) {
      let X = this.click.x;
      let Y = this.click.y;
      if ( this.player) { X = 7-X; Y = 7-Y; }

      this.ctx.drawImage(this.fieldB, 60*X, 60*Y);
    }

    if (this.player === 0) {
      if ( this.selected !== null ) {
        for ( let item in this.selected.opt ){
          this.ctx.drawImage(this.fieldLB, 60 * this.selected.opt[item].x, 60 * this.selected.opt[item].y);
        }
        for ( let item in this.selected.att ){
          this.ctx.drawImage(this.fieldR, 60 * this.selected.att[item].x, 60 * this.selected.att[item].y);
        }
      }
    }
    else {
      if ( this.selected !== null ) {
        for ( let item in this.selected.opt ){
          this.ctx.drawImage(this.fieldLB, 60 * (7 - this.selected.opt[item].x), 60 * (7 - this.selected.opt[item].y));
        }
        for ( let item in this.selected.att ){
          this.ctx.drawImage(this.fieldR, 60 * (7 - this.selected.att[item].x), 60 * (7 - this.selected.att[item].y));
        }
      }
    }


    // figurky
    for ( let y = 0; y < 8; y++ ) {
      for ( let x = 0; x < 8; x++ ) {
        let item = this.board.arr[y][x];
        let X = x;
        let Y = y;
        if ( this.player ) { X = 7-X; Y = 7-Y; }
        if ( item !== null ) { item.draw(this.ctx, X, Y); }
      }
    }


    requestAnimationFrame(() => {this.updateCanvas()});
  }


  potvrdTah() {
    if (this.move === 1) {
      if (this.player === 0 ) {
      this.player = 1;
      } 
      else {
        this.player = 0;
      }
      this.move = 0;
      this.lastM = [...this.board.arr];
    }
    
  }


  odznacTah() {
    if (this.move === 1) {
      this.move = 0;
      this.board.arr[this.prevSy][this.prevSx] = this.prevS;
      this.board.arr[this.prevDy][this.prevDx] = this.prevD;
    }
  }

  newGame() {
    this.board = new Board();
    this.prevS = null;
    this.prevSx = null;
    this.prevSy = null;
    this.prevD = null;
    this.prevDx = null;
    this.prevDy = null;
    this.move = 0;
    this.player = 0;
  }




  saveName() {
    let c = {
    name1: document.getElementById("player1").value,
    name2: document.getElementById("player2").value,
  };
  database.collection('names').doc('data').update({
    'gameName': 'test'

  }).then(() => {
    //console.log("Data pushed to DB");
  }).catch((err) => {
    console.log(err);
  });
  }

  saveGame() {
    console.log(this.board);

    let gameArr = "";


    for (let i=0; i<8; i++) {
      for (let j=0; j<8; j++) {
        if (this.board.arr[i][j] !== null) {
          console.log(this.board.arr[i][j].type, this.board.arr[i][j].color);

          if (this.board.arr[i][j].color === 1) {
            if (this.board.arr[i][j].type === "v") {
              gameArr += "1";
            }
            if (this.board.arr[i][j].type === "k") {
              gameArr += "2";
            }
            if (this.board.arr[i][j].type === "s") {
              gameArr += "3";
            }
            if (this.board.arr[i][j].type === "Q") {
              gameArr += "4";
            }
            if (this.board.arr[i][j].type === "K") {
              gameArr += "5";
            }
            if (this.board.arr[i][j].type === "p") {
              gameArr += "6";
            }

          }
          else {
            if (this.board.arr[i][j].type === "v") {
              gameArr += "a";
            }
            if (this.board.arr[i][j].type === "k") {
              gameArr += "b";
            }
            if (this.board.arr[i][j].type === "s") {
              gameArr += "c";
            }
            if (this.board.arr[i][j].type === "Q") {
              gameArr += "d";
            }
            if (this.board.arr[i][j].type === "K") {
              gameArr += "e";
            }
            if (this.board.arr[i][j].type === "p") {
              gameArr += "f";
            }
          }
        }
        else {
          gameArr += "0";
        }
      }
    }
    gameArr+= this.player;

    // console.log("gameArr",gameArr, gameArr.length);



    // console.log("reverseGA", reverseGA);

    // let database = firebase.database();
    let user = firebase.auth().currentUser.email;
    let gameName = document.getElementById("gameName").value;

    // console.log("save game", user, gameName, user.toString());

    let gameData = {
      prevS: this.prevS,
      prevSx: this.prevSx,
      prevSy: this.prevSy,
      prevD: this.prevD,
      prevDx: this.prevDx,
      prevDy: this.prevDy,
      move: this.move,
      player: this.player,
    };



    // let dbData = {
    //   User: user.toString(),
    //   Game: {GameName: gameName.toString(),
    //          GameData: gameData },
    // };

    let dbData = {
      user: {
             GameData: gameData,
             GameName: gameName.toString(),
             User: user.toString() },
    };

    // let key = database.ref(user);


    // if (firebase.auth().currentUser !== null && gameName !== "") {
    //   database.collection('chess/1').doc('data').update({
    //   'chessData': 0
    // })
    // .then(() => {
    //   //console.log("Data pushed to DB");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // }

    // firebase.database().ref("/user/1/").set({
    //   userID: 0
    // }).then(() => console.log('Set existing user done'))
    //   .catch((error) => console.log(error.message))

    


    // database.collection('names').doc('data').update({
    //   'names': firebase.firestore.FieldValue.arrayUnion(c)
    // })
    // .then(() => {
    //   //console.log("Data pushed to DB");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // function writeUserData(userId, email) {
    //   firebase.database().ref('users/' + userId).set({
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    //   });




  }

  loadGame() {

    let gameArr = ""; //tu pridu info z db
    let reverseGA = [];
    let riadokGA = [];
    for (let i=1; i<65; i++) {
      if (gameArr[i-1] === "0") { riadokGA.push(null);}
      if (gameArr[i-1] === "1") { riadokGA.push(new Figure('v', 1));}
      if (gameArr[i-1] === "2") { riadokGA.push(new Figure('k', 1));}
      if (gameArr[i-1] === "3") { riadokGA.push(new Figure('s', 1));}
      if (gameArr[i-1] === "4") { riadokGA.push(new Figure('Q', 1));}
      if (gameArr[i-1] === "5") { riadokGA.push(new Figure('K', 1));}
      if (gameArr[i-1] === "6") { riadokGA.push(new Figure('p', 1));}
      if (gameArr[i-1] === "a") { riadokGA.push(new Figure('v', 0));}
      if (gameArr[i-1] === "b") { riadokGA.push(new Figure('k', 0));}
      if (gameArr[i-1] === "c") { riadokGA.push(new Figure('s', 0));}
      if (gameArr[i-1] === "d") { riadokGA.push(new Figure('Q', 0));}
      if (gameArr[i-1] === "e") { riadokGA.push(new Figure('K', 0));}
      if (gameArr[i-1] === "f") { riadokGA.push(new Figure('p', 0));}
      
      if (i%8===0) {
        console.log(riadokGA);
        reverseGA.push([...riadokGA]);
        riadokGA = [];
      }
    }
    this.board.arr = [...reverseGA];
    this.player = reverseGA[65];

  }

  loadSavedGames() {

  }

  loadName() {
    document.getElementById("player1").value = this.Data[0].name1;
    document.getElementById("player2").value = this.Data[0].name2;
  }

  registration() {
    let userEmail = document.getElementById("email-reg").value;
    let userPass = document.getElementById("password-reg").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then(() => this.updateLogIn())
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorCode + "\n"  + errorMessage);
    });
  }

  login() {
    console.log('login button work');
    let userEmail = document.getElementById("email-log").value;
    let userPass = document.getElementById("password-log").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
      .then(() => this.updateLogIn())
      .catch(() => this.updateLogOut())

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorCode + "\n"  + errorMessage);
    });
  }

  logout() {
    firebase.auth().signOut()
    .then(() => this.updateLogOut())
    .catch(function(error) {
      console.log("odhlasenie zlyhalo");
    });
  }

  updateLogIn() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("control").style.display = "block";
    document.getElementById("logout-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "none";

    let user = firebase.auth().currentUser;
    let emailID= "";
    if (user != null) {
      emailID = user.email;
    }

  }

  updateLogOut() {
    document.getElementById("canvas").style.display = "none";
    document.getElementById("control").style.display = "none";
    document.getElementById("logout-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  host() {
    document.getElementById("canvas").style.display = "block";
    document.getElementById("control").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("logreg").style.display = "block";
    document.getElementById("registration-form").style.display = "none";
  }

  mainpage() {
    document.getElementById("canvas").style.display = "none";
    document.getElementById("control").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("logreg").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
  }

  showRegistration() {
    document.getElementById("registration-form").style.display = "block";
  }






  render() {
    return (
      <div>
        <div>
          <canvas id="canvas" width={this.cWidth} height={this.cHeight} />
        </div>

        <div id="control">
          <input id="potvrdTah" type='button' value="Potvrď ŤAH" onClick={this.potvrdTah.bind(this)} />
          <input id="odznacTah" type='button' value="Odznač ŤAH" onClick={this.odznacTah.bind(this)} />

        </div>
        <div id="logreg">
          <input id="logreg-btn" type='button' value="Prihlásenie / Registrácia" onClick={this.mainpage.bind(this)} />
        </div>

        <div id="control2">
          <input id="newGame" type='button' value="Nová HRA" onClick={this.newGame.bind(this)} />
          Názov hry:<input type="text" id="gameName" placeholder="nazov hry..."/>
          <input id="login" type='button' value="Uložit hru" onClick={this.saveGame.bind(this)} />
          <select id="savedGames">
            <option value="volvo">hra1...</option>
            <option value="saab">hra2...</option>
          </select>
           <input id="login" type='button' value="Načítaj hru" onClick={this.loadGame.bind(this)} />
        </div>

        <div id="login-form">
          <h1>ŠACH 2D</h1>
          <h3>Vitajte na stránke</h3>
          <p>Pre pokračovanie do hry sa prosím prihláste.</p>
          <p>Prihlásenie</p>
          Email:<input type="email" id="email-log" placeholder="email..."/>
          Heslo:<input type="password" id="password-log" placeholder="password..."/>
          <input id="login-btn" type='button' value="Prihlásenie" onClick={this.login.bind(this)} />
           <p>Ak nie ste registrovaný, môžete hrať ako HOSŤ alebo sa registrovať</p>
          <input id="host-btn" type='button' value="HOSŤ" onClick={this.host.bind(this)} />
          <input id="registration-show-btn" type='button' value="Zaregistrovať" onClick={this.showRegistration.bind(this)} />
        </div>

        <div id="registration-form">
        <p>Registrácia</p>
          Email:<input type="email" id="email-reg" placeholder="email..."/>
          Heslo:<input type="password" id="password-reg" placeholder="password..."/>
          <input id="register-btn" type='button' value="Registruj" onClick={this.registration.bind(this)} />
        </div>

        <div id="logout-form">
          <input id="logout-btn" type='button' value="Odhlásenie" onClick={this.logout.bind(this)} />
        </div>

      </div>
    )
  }
}

render(<Canvas />, document.getElementById('root'));

