import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={classes.card}>
            {
                //children is a spectial prop that allows to pass content that this <Card> is wrapped arround
            }
            {props.children}
        </div>
    );
}

export default Card;