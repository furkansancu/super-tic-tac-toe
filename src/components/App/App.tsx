import styles from './App.module.scss';

import Game from '../Game/Game';
import Controls from '../Controls/Controls';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.App_Container}>
        <div className={styles.App_Game}>
          <Game />
        </div>
        <div className={styles.App_Actions}>
          <Controls />
        </div>
        <div className={styles.App_Attribution}>
          you can give a star to this project on <a href="https://github.com/furkansancu/super-tic-tac-toe" target="_blank" rel="noopener noreferrer">github.com</a>.
        </div>
      </div>
    </div>
  )
}

export default App;