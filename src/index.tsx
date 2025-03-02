import { render } from 'preact';
import { Wrapper } from './components/wrapper/wrapper';
import { Title } from './components/title/title';

import './style.css';
import { TestContextProvider } from './example1/context/TestContext';
import { ElementWithContextValue1, ElementWithContextValue2 } from './example1/ElementWithContext';
import { UpdateContextValue1Button, UpdateContextValue2Button } from './example1/UpdateContextButton';
import { ValuesParent } from './example1/ValuesParent';

export function App() {
	return (
		<main>
			<Wrapper>
				<Title>Preact Context</Title>
				<TestContextProvider>
					<ValuesParent>
						<ElementWithContextValue1 />
						<ElementWithContextValue2 />
					</ValuesParent>
					<UpdateContextValue1Button />
					<UpdateContextValue2Button />
				</TestContextProvider>
			</Wrapper>
			<Wrapper>
				<Title>Preact Signals</Title>
			</Wrapper>
			<Wrapper>
				<Title>Zustand</Title>
			</Wrapper>
			<Wrapper>
				<Title>Nanostores</Title>
			</Wrapper>
		</main>
	);
}

render(<App />, document.getElementById('app'));
