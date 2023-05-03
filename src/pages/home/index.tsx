import { GetStaticProps } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Button, Head, Image, Link } from 'idon';

import ImageSlide1 from 'assets/imagem 1.jpg';
import ImageSlide2 from 'assets/imagem 2.jpg';
import ImageSlide3 from 'assets/imagem 3.jpg';
import ImageSlide4 from 'assets/imagem 4.jpg';
import ImageSlide5 from 'assets/imagem 5.jpg';
import ImageSlide6 from 'assets/imagem 6.jpg';
import ImageSlide7 from 'assets/imagem 7.jpg';
import ImageSlide8 from 'assets/imagem 8.jpg';
import ImageSlide9 from 'assets/imagem 9.jpg';
import ImageSlide10 from 'assets/imagem 10.jpg';
import ImageSlide11 from 'assets/imagem 11.jpg';
import ImageSlide12 from 'assets/imagem 12.jpg';
import ImageSlide13 from 'assets/imagem 13.jpg';
import ImageSlide14 from 'assets/imagem 14.jpg';
import ImageSlide15 from 'assets/imagem 15.jpg';
import ImageSlide16 from 'assets/imagem 16.jpg';
import ImageSlide17 from 'assets/imagem 17.jpg';
import ImageSlide18 from 'assets/imagem 18.jpg';
import ImageSlide19 from 'assets/imagem 19.jpg';
import ImageSlide20 from 'assets/imagem 20.jpg';

import { HomeContainer } from './styles';
import 'swiper/css/bundle';

function Home(): JSX.Element {
	return (
		<HomeContainer>
			<Head title="Site em manutenção" />

			<header>
				<div className="content">
					<h1 className="logo">Paraíso Tropical Village</h1>

					<div className="links-and-buttons">
						<div className="link">
							<i className="far fa-envelope" />

							<a href="mailto:paraisotropicalvillagearraial@gmail.com">
								paraisotropicalvillagearraial@gmail.com
							</a>
						</div>

						<div className="link">
							<i className="far fa-envelope" />

							<a href="mailto:Flatstropical@gmail.com">
								Flatstropical@gmail.com
							</a>
						</div>
					</div>
				</div>
			</header>

			<main>
				<div className="content slider">
					<Swiper
						modules={[Navigation, Pagination, A11y, Autoplay]}
						spaceBetween={0}
						slidesPerView={1}
						autoplay={{
							delay: 6200,
							disableOnInteraction: false,
						}}
						navigation={{
							enabled: true,
						}}
						pagination={{
							clickable: true,
						}}
						grabCursor
					>
						<SwiperSlide>
							<Image src={ImageSlide1} alt="Imagem 1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide2} alt="Imagem 2" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide3} alt="Imagem 3" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide4} alt="Imagem 4" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide5} alt="Imagem 5" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide6} alt="Imagem 6" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide7} alt="Imagem 7" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide8} alt="Imagem 8" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide9} alt="Imagem 9" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide10} alt="Imagem 10" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide11} alt="Imagem 11" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide12} alt="Imagem 12" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide13} alt="Imagem 13" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide14} alt="Imagem 14" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide15} alt="Imagem 15" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide16} alt="Imagem 16" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide17} alt="Imagem 17" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide18} alt="Imagem 18" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide19} alt="Imagem 19" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={ImageSlide20} alt="Imagem 20" />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="content text">
					<h1>Site em manutenção</h1>
					<p>
						O nosso site está em desenvolvimento e logo estará no
						ar. <br />Enquanto isso, você pode entrar em contato com a
						gente no whatsapp para saber mais e tirar dúvidas.
					</p>

					<Button
						linkTo="https://wa.link/65mf6c"
						linkProps={{
							to: 'https://wa.link/65mf6c',
							target: '_blank',
						}}
					>
						<i className="fab fa-whatsapp" />
						Entrar em contato
					</Button>
				</div>
			</main>

			<footer>
				<div className="content">
					<span className="copyright">
						&copy; Paraíso Tropical Village{' '}
						{new Date().getFullYear()} - Todos os direitos
						reservados
					</span>

					<span className="dev">
						Developed by <a>Guilherme</a> and{' '}
						<Link to="https://jeffersoncalmon.dev" target="_blank">
							Jefferson Ferrari
						</Link>
					</span>
				</div>
			</footer>
		</HomeContainer>
	);
}

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			data: {},
		},
	};
};

export default Home;
