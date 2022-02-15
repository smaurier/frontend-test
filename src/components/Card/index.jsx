import React from 'react';
import { useHistory } from 'react-router-dom'

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
			<img src={thumbnail}/>
			<div>
				<p className="lumx-typography-title">{nameCharacter}</p>
				<p>
					 {description}
				</p>
				<button onClick={handleProceed} to="/detail/:id">Voir les détails</button>
			</div>
		</div>
	)
}

export default Card;