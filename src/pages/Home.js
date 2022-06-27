import React from 'react';
import '../assets/css/index.css';
import '../assets/css/mobile.css';

import Action from '../components/action/Action';
import Button from '../components/button/Button';
import Header from '../components/post-data/Header';
import PostList from '../components/post-list/PostList';
import PostPensamento from '../components/post-pensamento/PostPensamento';
import Sponsored from '../components/sponsored/Sponsored';
import ImageLinkLi from '../components/image-link-li/ImageLinkLi';
import Image from '../components/image/Image';
import Section from '../components/post-data/Section';
import Search from '../components/search/Search';

import {
    LogoImg,
    LupaImg,
    HomeImg,
    GroupImg,
    WatchImg,
    MarketplaceImg,
    GameImg,
    MenuImg,
    MessengerImg,
    NotificationImg,
    DownImg,
    PerfilImg,
    AmigosImg,
    GruposImg,
    MarketplacesImg,
    WatchsImg,
    LembrançasImg,
    SalvosImg,
    PaginasImg,
    EventosImg,
    MaisRecentesImg,
    FavoritosImg,
    PostDetalheImg,
    PostDetalhe2Img,
    Perfil1Img,
    Perfil2Img,
    Perfil3Img,
    Perfil4Img,
    Perfil5Img,
    VideosImg,
    ImagesImg,
    SentimentosImg,
    VideoImg,
    LikeImg,
    CommentsImg
} from './images';

function Home() {
    return (
        <div id="page">
            <nav id="nav-01">
                <section className="nav-01-content">
                    <Image img={LogoImg} tam={"40"} />
                    <Search img={LupaImg} />
                </section>
                <section className="nav-01-content nav-01-menu">
                    <ul>
                        <ImageLinkLi id={""} class={"active"} link={""} img={HomeImg} text={""} tam={"25"} />
                        <ImageLinkLi id={""} class={""} link={""} img={GroupImg} text={""} tam={"25"} />
                        <ImageLinkLi id={""} class={""} link={""} img={WatchImg} text={""} tam={"25"} />
                        <ImageLinkLi id={""} class={""} link={""} img={MarketplaceImg} text={""} tam={"25"} />
                        <ImageLinkLi id={""} class={""} link={""} img={GameImg} text={""} tam={"25"} />
                    </ul>
                </section>
                <section className="nav-01-content">
                    <ul id="nav-01-ul">
                        <ImageLinkLi id={""} class={""} link={""} img={MenuImg} text={""} tam={"18"} />
                        <ImageLinkLi id={""} class={""} link={""} img={MessengerImg} text={""} tam={"18"} />
                        <ImageLinkLi id={""} class={""} link={""} img={NotificationImg} text={""} tam={"18"} />
                        <ImageLinkLi id={""} class={""} link={""} img={DownImg} text={""} tam={"18"} />
                    </ul>
                </section>
            </nav>
            <section id="content">
                <nav id="nav-02">
                    <ul>
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={PerfilImg} text={"Cirdan Clurgi"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={AmigosImg} text={"Amigos"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={GruposImg} text={"Grupos"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={MarketplacesImg} text={"Marketplace"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={WatchsImg} text={"Watch"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={LembrançasImg} text={"Lembranças"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={SalvosImg} text={"Salvos"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={PaginasImg} text={"Páginas"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={EventosImg} text={"Eventos"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={MaisRecentesImg} text={"Mais recentes"} tam={""} />
                        <ImageLinkLi id={""} class={""} link={""} img={FavoritosImg} text={"Favoritos"} tam={""} />
                    </ul>
                </nav>
                <aside id="posts">
                    <section id="post-list">
                        <article id="list">
                            <div>
                                <PostList img={Perfil1Img} text={"Harald Gorm"} />
                                <PostList img={Perfil2Img} text={"Aster Ipsun"} />
                                <PostList img={Perfil3Img} text={"Cirdan Clurgi"} />
                                <PostList img={Perfil4Img} text={"Desislav Bruce"} />
                                <PostList img={Perfil5Img} text={"Kaylan Heka"} />
                            </div>
                        </article>
                    </section>

                    <section id="post-pensando">
                        <PostPensamento img={Perfil1Img} />
                        <section id="actions">
                            <Action id={"video"} class={"actionImage"} img={VideosImg} text={"Vídeo ao vivo"}  />
                            <Action id={""} class={"actionImage"} img={ImagesImg} text={"Foto/vídeo"}  />
                            <Action id={""} class={"actionImage"} img={SentimentosImg} text={"Sentimento/atividade"} />
                        </section>
                    </section>

                    <section id="post-sala">
                        <article id="salas">
                            <Button img={VideoImg} text={"Criar Sala"} />
                            <Image id={""} img={Perfil2Img} tam={""} />
                            <Image id={""} img={Perfil3Img} tam={""} />
                            <Image id={""} img={Perfil4Img} tam={""} />
                            <Image id={""} img={Perfil5Img} tam={""} />
                        </article>
                    </section>

                    <section id="post-data">
                        <article>
                            <Header img={Perfil2Img} text={"Aster Ipsun"} />
                            <Section
                                text={"Suspendisse sagittis sit amet nisi vitae eleifend. Etiam auctor semper lorem, ac tristique lectus dignissim eu. Ut odio lectus, mattis quis cursus ut, aliquet a orci."}
                                img={Perfil2Img}
                                img1={LikeImg}
                                img2={CommentsImg}
                            />
                        </article>
                        <article>
                            <Header img={Perfil3Img} text={"Cirdan Clurgi"} />
                            <Section
                                text={"Suspendisse sagittis sit amet nisi vitae eleifend. Etiam auctor semper lorem, ac tristique lectus dignissim eu. Ut odio lectus, mattis quis cursus ut, aliquet a orci."}
                                img={Perfil3Img}
                                img1={LikeImg}
                                img2={CommentsImg}
                            />
                        </article>
                        <article>
                            <Header img={Perfil4Img} text={"Desislav Bruce"} />
                            <Section
                                text={"Suspendisse sagittis sit amet nisi vitae eleifend. Etiam auctor semper lorem, ac tristique lectus dignissim eu. Ut odio lectus, mattis quis cursus ut, aliquet a orci."}
                                img={Perfil4Img}
                                img1={LikeImg}
                                img2={CommentsImg}
                            />
                        </article>
                        <article>
                            <Header img={Perfil5Img} text={"Kaylan Heka"} />
                            <Section
                                text={"Suspendisse sagittis sit amet nisi vitae eleifend. Etiam auctor semper lorem, ac tristique lectus dignissim eu. Ut odio lectus, mattis quis cursus ut, aliquet a orci."}
                                img={Perfil5Img}
                                img1={LikeImg}
                                img2={CommentsImg}
                            />
                        </article>
                    </section>
                </aside>

                <nav id="nav-03">
                    <h3>Sponsored</h3>
                    <Sponsored detalhes={PostDetalheImg} title={"Suspendisse Sagittis"} />
                    <Sponsored detalhes={PostDetalhe2Img} title={"Vitae Eleifend"} />
                    <br />
                    <h3>Contacts</h3>
                    <br />
                    <ul>
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={Perfil1Img} text={"Acácio Balder"} tam={""} />
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={Perfil2Img} text={"Aster Ipsun"} tam={""} />
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={Perfil3Img} text={"Cirdan Clurgi"} tam={""} />
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={Perfil4Img} text={"Desislav Bruce"} tam={""} />
                        <ImageLinkLi id={"logo_img"} class={""} link={""} img={Perfil5Img} text={"Kaylan Heka"} tam={""} />
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Home;
