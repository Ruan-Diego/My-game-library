import React from 'react';
import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { update_game } from '../api/game';

const FormGame = ({addGame, close, game, visible}) => {

    const [nomeGame, setNomeGame] = useState(null);
    const [valor, setValor] = useState(null);
    const [image_url, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const hasValor = valor !== null && valor !== undefined && valor !== '';
    const hasImage = image_url !== null && image_url !== undefined && image_url !== '';

    useEffect(() => {
        if (game) {
            setImageUrl(game.attributes.image_url);
            setValor(game.attributes.valor);
            setNomeGame(game.attributes.name);
            setTitle('Edite seu jogo');
        } else {
            setTitle('Jogo novo')
        }
        console.log(image_url, valor, nomeGame);
        // eslint-disable-next-line
    }, [game]); 

    const save = async () => {
        let element = {valor: valor, image_url: image_url, name: nomeGame}
        if(game){
            await update_game(element, game.id)
        } else {
            await addGame(element);
        }
        setValor(null)
        setNomeGame(null)
        setImageUrl('')
        close();
    }

    const closeForm = async () => {
        setValor(null)
        setNomeGame(null)
        setImageUrl('')
        close();
    }
    return(
        <Dialog className='modal' draggable={false} header={title} visible={visible} onHide={() => closeForm() }
        style={{ width: 'fit-content' }}>

        <div className=''>
        
          <div className="container">
            <input
              required
              value={nomeGame}
              type="text"
              name="text"
              className="input"
              onChange={(e) => setNomeGame(e.target.value)}
            />
            <label className="label">Nome do jogo</label>
          </div>
          <div className="container">
            <InputNumber 
              required={true} 
              inputId="currency-pt" 
              value={valor} 
              onValueChange={(e) => setValor(e.value)} 
              mode="currency" 
              currency="BRL" 
              locale="pt-BR" 
              className="custom-class"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <label className={`labelInputNumber ${hasValor || isFocused ? 'active' : ''}`}>Valor</label>
          </div>
          <div className="container">
            <input
              required
              value={image_url}
              type="text"
              name="text"
              className="input"
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <label className="label">Url de uma imagem</label>
          </div>
          <div className={`container img-container img${hasImage ? 'previa' : 'none'}`}>
            <img  width={'80px'} src={image_url} alt='Prévia da imagem'/>
          </div>
        </div>
        <div className="flex align-items-center gap-2 buttons">
          <Button label="Salvar" onClick={(e) => save(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
          <Button label="Cancelar"  onClick={() => close()} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
        </div>
      </Dialog>
    );
}

export default FormGame;
