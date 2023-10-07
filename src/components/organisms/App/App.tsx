import styles from './App.module.scss';

import Logo from '../../atoms/Logo/Logo';
import Game from '../../molecules/Game/Game';

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.App_Container}>
        <div className={styles.App_Header}>
          <Logo />
        </div>
        <div className={styles.App_Game}>
          <Game />
        </div>
        <div className={styles.App_Actions}>

        </div>
      </div>
    </div>
  )
}

export default App;