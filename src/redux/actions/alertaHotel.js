import { createAction } from '@reduxjs/toolkit'

const alerta = createAction('alerta', (data) => {
    console.log(data)
    return {
        payload: data
        
    }

})

const alertActions= {
    alerta
}

export default alertActions