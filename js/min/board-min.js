function Board(){this.results=[],this.frost=[],this.rock=[],this.shields=[],this.currentPlayer=0,this.initiateBoard=function(){for(var s=0;4>s;s++){this.results[s]=[],this.frost[s]=[],this.rock[s]=[],this.shields[s]=[];for(var r=0;4>r;r++){var e=4*s+r+1;this.results[s][r]=0,this.frost[s][r]=0,this.rock[s][r]=0,this.shields[s][r]=0}}this.currentPlayer=1},this.endTurn=function(){if(1===this.currentPlayer){this.currentPlayer=-1,$(".wrapper").removeClass("p1-turn"),$(".wrapper").addClass("p2-turn");for(var s=0;s<player1.hand.length;s++)player1.hand[s].cardBody.addClass("hidden");for(var s=0;s<player2.hand.length;s++)player2.hand[s].cardBody.removeClass("hidden");player2.drawCard()}else{this.currentPlayer=1,$(".wrapper").removeClass("p2-turn"),$(".wrapper").addClass("p1-turn");for(var s=0;s<player2.hand.length;s++)player2.hand[s].cardBody.addClass("hidden");for(var s=0;s<player1.hand.length;s++)player1.hand[s].cardBody.removeClass("hidden");player1.drawCard()}for(var r=$(".box.flipper"),s=0;4>s;s++)for(var e=0;4>e;e++)r.x===s&&r.y===e&&r.removeClass("frost"),this.frost[s][e]=this.frost[s][e]>0?this.frost[s][e]-1:0,this.rock[s][e]=this.rock[s][e]>0?this.rock[s][e]-1:0},this.updateCell=function(s,r){if(0!==this.results[s][r]||this.frost[s][r]>=1||this.rock[s][r]>=1)window.alert("The cell is occupied!");else{var e=new Piece;e.row=s,e.col=r,e.square=$("div").find("[x="+s+"][y="+r+"]"),this.results[s][r]=this.currentPlayer,e.square.addClass("opened flip"),$(e.square).unbind(),1===this.currentPlayer?(e.square.addClass("opened-p1"),$(player1.pieces).append(e)):(e.square.addClass("opened-p2"),$(player2.pieces).append(e),window.console.log(player2.pieces)),this.endTurn()}},this.drawMark=function(s){return 1===s?"X":"O"},this.playGame=function(s,r){void 0===this.determineWinner()&&this.updateCell(s,r),this.gameOver()},this.gameOver=function(){var s=this;void 0!==this.determineWinner()&&setTimeout(function(){window.alert("The winner is "+s.drawMark(s.determineWinner()))},100)},this.determineWinner=function(){return void 0!==this.checkRows()?this.checkRows():void 0!==this.checkCols()?this.checkCols():void 0!==this.checkDiagonals()?this.checkDiagonals():void 0},this.checkRows=function(){for(var s=0;4>s;s++){var r=this.results[s][0]+this.results[s][1]+this.results[s][2]+this.results[s][3];if(4===r||-4===r)return this.results[s][0]}},this.checkCols=function(){for(var s=0;4>s;s++){var r=this.results[0][s]+this.results[1][s]+this.results[2][s]+this.results[3][s];if(4===r||-4===r)return this.results[0][s]}},this.checkDiagonals=function(){var s=this.results[0][0]+this.results[1][1]+this.results[2][2]+this.results[3][3];return 4===s||-4===s?this.results[1][1]:(s=this.results[0][3]+this.results[1][2]+this.results[2][1]+this.results[3][0],4===s||-4===s?this.results[1][1]:void 0)}}