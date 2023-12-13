
import Header from './components/Header.js';
import CoreConcept from './components/CoreConcept.js';
import { Core_Concept } from './data.js';
import TabButton from './components/TabButton.js';
import { useState } from 'react';
import EXAMPLES from './data-with-examples.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function App() {
  // let tabContent = 'Please click a button';
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton)
    // console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={Core_Concept[0].title} description={Core_Concept[0].description} image={Core_Concept[0].image} />
            <CoreConcept {...Core_Concept[1]} />
            <CoreConcept {...Core_Concept[2]} />
            <CoreConcept {...Core_Concept[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
          </menu>
          <div id ="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
            </div>
        </section>
      </main>



    </div>
  );
}

export default App;