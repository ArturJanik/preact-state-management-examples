import { render } from 'preact';
import { Wrapper } from './components/wrapper/wrapper';
import { Title } from './components/title/title';

import './style.css';

import { Example1 } from './example1/Example1';
import { Example2 } from './example2/Example2';
import { Example3 } from './example3/Example3';

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
				<Title>Nanostores</Title>
				<Example3 />
			</Wrapper>
		</main>
	);
}

render(<App />, document.getElementById('app'));
