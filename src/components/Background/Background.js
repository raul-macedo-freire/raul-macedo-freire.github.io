import React from 'react'
import reactDom from 'react-dom'
import './Background.css'
import SideBar from '../../components/SideBar/Sidebar.js';

export default function Background(content,DarkModeOn=true){
    document.body.style.backgroundColor="#2A344F"

    let DarkModeColors = ['#FF1100','#0E02FF','#FFF623']
    var colors = ['#A19CFF','#FF4C3F','#85FF6A']
    
    let PageSize = Math.floor(window.innerWidth/25)

    if(DarkModeOn){
        colors = DarkModeColors
    }
    let line = []
    var ColorIndex = 0
    for (const x of Array(PageSize).keys()){
        line.push(
            <div className='ellipsis' style = {{"background-color": colors[ColorIndex]}}> </div>
        )
        if(ColorIndex === 2){
            ColorIndex = 0}
        else{
            ColorIndex = ColorIndex+1
        }
    }
    
    return (
        <main className='body'>
            <SideBar/>
            <div className='line' style={{top:10}}>
                {line}
            </div>
            <main className='content'>
                    {content}
            </main>
            <div className='line' style = {{bottom:0}}>
                {line}
            </div>
        </main>
    )
}
