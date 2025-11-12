import { Q2App } from 'q2-web';
import type { Q2AppProps, Q2AppState } from 'q2-web';
import { getFolderContent } from "./components/content"
import './App.css';

interface AppState extends Q2AppState {
  guestName: string;
  guestIcon: string;
  guestUid: string;
}

export class App extends Q2App<Q2AppProps, AppState> {
  constructor(props: Q2AppProps) {
    super(props);
  }

  showHome = () => {
    getFolderContent("", "HOME").then((f) => { if (f) this.showDialog(f) })
  };


  render() {
    return (
      <div>
        {super.render()}
      </div>
    );
  }
}

export default App