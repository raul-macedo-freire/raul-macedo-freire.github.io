import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import SideMenuData from './SideMenuData.js';
import ProfileData from './ProfileData';
import SocialMediaData from './SocialMediaData.js';


function SidebarProfile(){
  let profile = ProfileData
  return <div className='profile'>
    <img id={profile.id} src={profile.image} />
    <a className='label-topic valign-text-middle ' href="/">{profile.content}</a>
  </div>
}


export function SidebarLabels(){
    let labels = []
    var props = SideMenuData
    for (var label in props){
        labels.push(
          <nav className='nav-topic' >
              <img title={props[label].title} className= 'label-image' src={props[label].image}/>
            <a className='label-topic' id={props[label].id} href={props[label].path}>{props[label].title}</a>
          </nav>
        )
    }
    return labels
}


function SidebarSocialMedia(){
  let SocialMedia = SocialMediaData
  let Medias = []
  for( var media in SocialMedia ){
    Medias.push(
    <div className='social-media-icon' >
      <a href={SocialMedia[media].link} >
      <img src={SocialMedia[media].image} href={SocialMedia[media].link} title={SocialMedia[media].name}/>
      </a>
    </div>
    )
  }
  return <div className='sidebar-social-media'>
      {Medias}
    </div>
}


export default function SideBar(){
  return <Menu styles='bm-menu'>
    <SidebarProfile/>
    <SidebarLabels/>
    <SidebarSocialMedia/>
  </Menu>
}


