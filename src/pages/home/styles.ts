import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	min-height: 100vh;

	a {
		&:hover {
			color: ${({ theme }) => theme.colors.title};
			text-decoration: underline;
		}
	}

	header {
		width: 100%;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			/* justify-content: space-between; */
			gap: 3rem;

			min-height: 10rem;
			padding: 3.2rem 0;

			.logo {
				font-size: 2.6rem;
				font-weight: 500;
			}

			div.links-and-buttons {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 3.2rem;

				.link {
					display: flex;
					align-items: center;
					gap: 1.2rem;

					font-size: 1.6rem;

					i {
						font-size: 90%;
					}
				}
			}
		}
	}

	main {
		position: relative;
		width: 100%;
		padding: 5rem 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5rem;

		overflow-y: scroll;

		.content.slider {
			position: relative;
			width: 100rem;
			/* width: 100%; */
			height: 40rem;

			.swiper {
				width: 100%;
				height: 100%;

				background: #121214;
				border-radius: 1.6rem;

				--swiper-theme-color: #fff;

				.swiper-wrapper {
					.swiper-slide {
						width: 100%;
						height: 100%;

						img,
						span {
							width: 100% !important;
							height: 100% !important;

							object-fit: cover;
						}
					}
				}

				.swiper-button-prev,
				.swiper-button-next {
					width: 4rem;
					height: 4rem;

					border-radius: 50%;
					background: #fff;
					color: #000;

					&::after {
						transform: scale(0.4);
					}
				}
			}
		}

		.content.text {
			position: relative;
			z-index: 5;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 0.8rem;

			width: 55rem;
			/* margin:  auto; */

			h1 {
				font-size: 3.2rem;
			}

			p {
				font-size: 1.8rem;
				line-height: 1.5;
			}

			.idon-button {
				margin-top: 2rem;

                background: #DB8331;
                font-size: 1.8rem;
			}
		}
	}

	footer {
		width: 100%;

		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;

			padding: 3.2rem 0;
			font-size: 1.4rem;

			a {
				font-weight: 500;
			}

			.dev {
				opacity: 0.8;
			}
		}
	}

	@media (max-width: 768px) {
		header {
			.content {
				padding: 4rem 0;

				.logo {
					font-size: 4rem;
				}

				div.links-and-buttons {
					gap: 2rem;
					flex-direction: column;

					.link {
						font-size: 2.2rem;
					}
				}
			}
		}

		main {
			/* padding: 0 0 5rem; */

			.content.slider {
				width: 88%;
			}

			.content.text {
				width: 88%;

				h1 {
					font-size: 4rem;
				}

				P {
					font-size: 2.4rem;

                    br {
                        display: none;
                    }
				}
			}
		}

		footer {
			.content {
				justify-content: center;
				flex-direction: column;
				gap: 2rem;

				padding: 5.2rem 0;

				font-size: 1.9rem;
			}
		}
	}
`;

export default HomeContainer;
