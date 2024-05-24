import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componenets/Pai'
import Filho from './componenets/Filho'

ReactDOM.render(
<div>
  <Pai nome="Paulo" sobrenome="Silva"> 
  <Filho nome="Pedro" />
  <Filho nome="Paulo" />
  <Filho nome="Carla" />
  </Pai>
</div>
, document.getElementById('root'))