'use client';

import { Anim8 } from '@/lib/anim8';
import { Navi } from '@/lib/navi';
import { HnProvider  } from '@/lib/hashnode';
import Container from './container';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function Home() {

const client = new ApolloClient({
	uri: "https://gql.hashnode.com/",
	cache: new InMemoryCache(),
  })

return (
	<ApolloProvider client={client}>
	<HnProvider>
	<Anim8>
		<Navi>
			<Container />
		</Navi>
	</Anim8>
	</HnProvider>
	</ApolloProvider>
)}
