import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UnstatedApp from './unstated-example';
import ConstateApp from './constate-example';

function App() {
  return (
    <>
      <div style={{ margin: 50 }}>
        Unstated example
        <UnstatedApp />
      </div>
      <div style={{ margin: 50 }}>
        Constate example
        <ConstateApp />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
