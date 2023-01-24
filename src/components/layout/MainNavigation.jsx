import Link from 'next/link';
import classes from './MainNavigation.module.scss';
import {SideBar} from './SideBar'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/' >
        Let's Meet
        </Link>
  
        </div>
      <nav>
      <div className={classes.side_bar}>
            <SideBar/>
      </div>

        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/newMeetup'>+ New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
