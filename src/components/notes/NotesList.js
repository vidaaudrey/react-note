import React, {Component} from 'react'

export default ({notes}) => {
	 return (
		 <ul className="list-group">
			 {notes.map((note, index) => (
				 <li className="list-group-item" key={index}>{note}</li>
			 ))}
		 </ul>
	 )
	 
}