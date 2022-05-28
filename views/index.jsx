const React = require('react')
const breads = reruire('../controllers/breads_controller.js')
const bread = require('../models/bread.js')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <h3>Breads</h3>
        {/* This is a JSX comment. */}
        {/* <p>I have {breads[0].name} breads!</p> */}
        <ul>
            {
                breads.map((bread, index)=> {
                return(
                    <li key={index}> 
                      <a href={`/breads/${bread.id}`}>
                      {bread.name}
                      </a>
                    </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
         <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

      </Default>
    )
}

module.exports = Index
