import styles from './App.module.scss';

import Logo from './components/Logo/Logo';
import Game from './components/Game/Game';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.App_Container}>
        <div className={styles.App_Header}>
          <Logo />
        </div>
        <Game />
      </div>
    </div>
  )
}

export default App;