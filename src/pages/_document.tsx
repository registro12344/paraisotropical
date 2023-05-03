import Document, {
	Head,
	Html,
	NextScript,
	Main,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

import { app } from 'config/app';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				) as unknown as React.ReactFragment,
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="description" content={app.description} />
					<meta name="robots" content="index, follow" />
					<meta
						name="author"
						content={`${app.author.name} - ${app.author.url}`}
					/>
					<meta
						name="copyright"
						content={`${app.name} - https://${app.site}`}
					/>

					{/* <!-- Open Graph / Facebook --> */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content={app.site} />
					<meta property="og:title" content={app.name} />
					<meta property="og:description" content={app.description} />
					<meta property="og:image" content="/open-graph-image.png" />

					{/* <!-- Icons --> */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />

					{/* <!-- Twitter --> */}
					<meta
						property="twitter:card"
						content="/open-graph-image.png"
					/>
					<meta property="twitter:url" content={app.site} />
					<meta property="twitter:title" content={app.name} />
					<meta
						property="twitter:description"
						content={app.description}
					/>
					<meta
						property="twitter:image"
						content="/open-graph-image.png"
					/>

					<link rel="canonical" href={`https://${app.site}/home`} />

					{/* Fonts */}
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>

					{/* Icons */}
					<link
						rel="stylesheet"
						href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
						integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
						crossOrigin="anonymous"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
