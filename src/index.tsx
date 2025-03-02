import { render } from 'preact';
import { Wrapper } from './components/wrapper/wrapper';
import { Title } from './components/title/title';

import './style.css';

import { Example1 } from './example1/Example1';
import { Example2 } from './example2/Example2';

export function App() {
	return (
		<main>
			<Wrapper>
				<Title>Preact Context</Title>
				<Example1 />
			</Wrapper>

			<Wrapper>
				<Title>Preact Signals</Title>
				<Example2 />
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
