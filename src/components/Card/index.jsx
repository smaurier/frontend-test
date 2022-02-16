import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button} from '@lumx/react';
import { mdiEye} from '@lumx/icons';

function Card (props){
	const thumbnail = props.thumbnail;
	const nameCharacter = props.nameCharacter;
	const description = props.description;
	const id = props.id;

	const history = useHistory();

	const handleProceed = (e) => {
		history.push(`/detail/${id}`);
	}

	return(
		<div className='card'>
			<img src={thumbnail} alt={nameCharacter} aria-labelledby={nameCharacter}/>
			<div>
				<p className="lumx-typography-display1">{nameCharacter}</p>
				<p className="lumx-typography-body2">
					{description===""?<span className='span--noResult'>Aucune description trouvée</span>:description}
				</p>
				<Button leftIcon={mdiEye} onClick={handleProceed} to="/detail/:id">Voir les détails</Button>
			</div>
		</div>
	)
}

export default Card;