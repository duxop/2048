import React, { useEffect, useState } from "react";
import Tile from './tile';
import { nanoid } from "nanoid";

export default function() {

    const [tilesInfo, updateTiles] = useState(initTiles())
    const [gameOver, setGameOver] = useState(false)

    function initTiles() {
        console.log("glitch")
        const temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

        const rand1 = Math.floor(Math.random()*16);
        const rand2 = Math.floor(Math.random()*16);

        const i1 = Math.floor(rand1/4)
        const j1 = Math.floor(rand1%4)
        const i2 = Math.floor(rand2/4)
        const j2 = Math.floor(rand2%4)

        temp[i1][j1] = Math.ceil(Math.random()*2)*2;
        temp[i2][j2] = Math.ceil(Math.random()*2)*2;
        console.log(temp)
        return temp;
    }

    

    function left() {
        
        const blank = []

        for(var i=0; i<16; ++i){
            blank.push(i)
        }

        var temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

        for(var i=0; i<4; ++i){
            
            const scores =[]

            for(j in tilesInfo[i]){
                if(tilesInfo[i][j]!==0)
                    scores.push(tilesInfo[i][j])
            }
            console.log(scores)

            var j = 0
            var x = 0

            while(j<(scores.length)) {
                if((j !== (scores.length-1)) && (scores[j]===scores[j+1])){
                    temp[i][x]= 2*scores[j]
                    j++
                }
                else {
                    temp[i][x]= scores[j]
                }
                const index = blank.indexOf(i*4+x);
                if (index > -1) { // only splice array when item is found
                    blank.splice(index, 1); // 2nd parameter means remove one item only
                }
                j++
                x++
            }

        }
        console.log(temp)
        console.log(blank)

        if(blank.length === 0){

            setGameOver(true)
            return
        }

        generateNext(temp, blank)
        
        updateTiles(temp)

    }

    // ===============Rigth ==============
    function right() {
        
        const blank = []

        for(var i=0; i<16; ++i){
            blank.push(i)
        }

        var temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

        for(var i=0; i<4; ++i){
            
            const scores =[]

            for(j in tilesInfo[i]){
                if(tilesInfo[i][j]!==0)
                    scores.push(tilesInfo[i][j])
            }
            console.log(scores)

            var j = scores.length-1
            var x = 3

            while(j>=(0)) {
                if((j !== (0)) && (scores[j]===scores[j-1])){
                    temp[i][x]= 2*scores[j]
                    j--
                }
                else {
                    temp[i][x]= scores[j]
                }
                const index = blank.indexOf(i*4+x);
                if (index > -1) { // only splice array when item is found
                    blank.splice(index, 1); // 2nd parameter means remove one item only
                }
                j--
                x--
            }

        }
        console.log(temp)
        console.log(blank)

        if(blank.length === 0){

            setGameOver(true)
            return
        }

        generateNext(temp, blank)
        
        updateTiles(temp)

    }

    // ==============Up===============

    function up() {
        
        const blank = []

        for(var i=0; i<16; ++i){
            blank.push(i)
        }

        var temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

        for(var j=0; j<4; ++j){
            
            const scores =[]

            for(var i=0 ;i<4; ++i){
                if(tilesInfo[i][j]!==0)
                    scores.push(tilesInfo[i][j])
            }
            console.log(scores)

            var i = 0
            var x = 0

            while(i<(scores.length)) {
                if((i !== (scores.length-1)) && (scores[i]===scores[i+1])){
                    temp[x][j]= 2*scores[i]
                    i++
                }
                else {
                    temp[x][j]= scores[i]
                }
                const index = blank.indexOf(x*4+j);
                if (index > -1) { // only splice array when item is found
                    blank.splice(index, 1); // 2nd parameter means remove one item only
                }
                i++
                x++
            }

        }
        console.log(temp)
        console.log(blank)

        if(blank.length === 0){

            setGameOver(true)
            return
        }

        generateNext(temp, blank)
        
        updateTiles(temp)

    }

    // ============= Down =================

    function down() {
        
        const blank = []

        for(var i=0; i<16; ++i){
            blank.push(i)
        }

        var temp = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

        for(var j=0; j<4; ++j){
            
            const scores =[]

            for(var i=0 ;i<4; ++i){
                if(tilesInfo[i][j]!==0)
                    scores.push(tilesInfo[i][j])
            }
            console.log(scores)

            var i = scores.length-1
            var x = 3

            while(i>=(0)) {
                if((i !== (0)) && (scores[i]===scores[i-1])){
                    temp[x][j]= 2*scores[i]
                    i--
                }
                else {
                    temp[x][j]= scores[i]
                }
                const index = blank.indexOf(x*4+j);
                if (index > -1) { // only splice array when item is found
                    blank.splice(index, 1); // 2nd parameter means remove one item only
                }
                i--
                x--
            }

        }
        console.log(temp)
        console.log(blank)

        if(blank.length === 0){

            setGameOver(true)
            return
        }

        generateNext(temp, blank)
        
        updateTiles(temp)

    }

    function generateNext(temp, blank) {

        const rand1 = Math.floor(Math.random()*blank.length);

        const i1 = Math.floor(blank[rand1]/4)
        const j1 = Math.floor(blank[rand1]%4)

        temp[i1][j1] = Math.ceil(Math.random()*2)*2;

        console.log(temp)

    }

    useEffect(() => {
        if(!gameOver){
            const handleKeyPress = (event) => {
                if (event.code === 'ArrowLeft') { 
                    left()
                    console.log('Left arrow key pressed!');
                }
                else if(event.code === 'ArrowRight'){
                    right()
                    console.log('Right arrow key pressed!');
                }
                else if(event.code === 'ArrowUp'){
                    up()
                    console.log('Up arrow key pressed!');
                }
                else if(event.code === 'ArrowDown'){
                    down()
                    console.log('Down arrow key pressed!');
                }
                
            };
        
            document.addEventListener('keydown', handleKeyPress);
        
            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            };
        }
    }, [tilesInfo, gameOver]);


    const tiles = tilesInfo.flat(1).map(i =>
                                <Tile
                                    key = {nanoid()}
                                    num = {i}
                                />)                   
    return gameOver ? (<div> Game Over</div>) : 
        (<div className="tiles">
            {tiles}
        </div>)
}