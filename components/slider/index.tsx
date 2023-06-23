import { Product } from "lib/shopify/types";
import Link from "next/link";
import Carousel from "react-multi-carousel";


import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export function HeroSlider() {

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div>
                <Link className="h-full w-full" href='/product/mon-paris'>
                    <img src='https://cdn.shopify.com/s/files/1/0764/5514/9880/files/MonParis.png?v=1683867969' alt='Mon Paris' />
                    <h2>Mon Paris</h2>
                </Link>
            </div>
            <div>
                <Link className="h-full w-full" href='/product/mon-paris'>
                    <img src='https://cdn.shopify.com/s/files/1/0764/5514/9880/files/MonParis.png?v=1683867969' alt='Mon Paris' />
                    <h2>Mon Paris</h2>
                </Link>
            </div>
            <div>
                <Link className="h-full w-full" href='/product/mon-paris'>
                    <img src='https://cdn.shopify.com/s/files/1/0764/5514/9880/files/MonParis.png?v=1683867969' alt='Mon Paris' />
                    <h2>Mon Paris</h2>
                </Link>
            </div>
        </Carousel>
    )
}

export function HeroProductItem({ product }: { product: Product }) {
    return (
        <>
            <div key={product.handle}>
                <Link className="h-full w-full" href={`/product/${product.handle}`}>
                    <img src={product.featuredImage.url} alt={product.featuredImage.altText} />
                    <h2>{product.title}</h2>
                </Link>
            </div>
        </>
    );
}


