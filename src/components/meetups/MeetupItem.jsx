import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';

function MeetupItem(props) {
const router = useRouter();

function showDetailsHandle() {
  // NAVIGATE PROGRAMMATICALLY
  // this pushes a new page on the stak of pages and is the
  // equivalent of using the Link component
    router.push(`/${props.id}`)
}

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.content}>
          <p>{props.date}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandle}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
