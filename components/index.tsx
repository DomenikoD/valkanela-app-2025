import { ComponentProps } from "react";
import dynamic from "next/dynamic";
import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import { unflatten } from "@/helpers/unflatten";
import { Section } from "@kickstartds/ds-agency/section";
import editablePage from "./Page";
import { ImageAutoSizeProvider } from "./ImageAutoSizeProvider";

export const editable =
  (Component: React.ComponentType<any>, nestedBloksKey?: string) =>
  // eslint-disable-next-line react/display-name
  ({ blok }: { blok: SbBlokData }) => {
    const { component, components, type, typeProp, _uid, ...props } =
      unflatten(blok);
    return (
      <Component {...storyblokEditable(blok)} {...props} type={typeProp}>
        {nestedBloksKey &&
          (blok[nestedBloksKey] as SbBlokData[] | undefined)?.map(
            (nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            )
          )}
      </Component>
    );
  };

export const components = {
  page: editablePage,
  "blog-overview": dynamic(() => import("./BlogOverview")),
  "blog-post": dynamic(() => import("./BlogPost")),
  "blog-teaser": editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/blog-teaser").then(
        (mod) => mod.BlogTeaserContextDefault
      )
    )
  ),
  "blog-aside": editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/blog-aside").then(
        (mod) => mod.BlogAsideContextDefault
      )
    )
  ),
  "blog-head": editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/blog-head").then(
        (mod) => mod.BlogHeadContextDefault
      )
    )
  ),
  section: editable(Section, "components"),
  cta: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/cta").then((mod) => mod.CtaContextDefault)
    )
  ),
  faq: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/faq").then((mod) => mod.FaqContextDefault)
    )
  ),
  features: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/features").then(
        (mod) => mod.FeaturesContextDefault
      )
    )
  ),
  feature: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/feature").then(
        (mod) => mod.FeatureContextDefault
      )
    )
  ),
  gallery: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/gallery").then(
        (mod) => mod.GalleryContextDefault
      )
    )
  ),
  headline: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/headline").then((mod) => mod.Headline)
    )
  ),
  split: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/split").then((mod) => mod.Split)
    )
  ),
  stats: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/stats").then(
        (mod) => mod.StatsContextDefault
      )
    )
  ),
  stat: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/stat").then(
        (mod) => mod.StatContextDefault
      )
    )
  ),
  "teaser-card": editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/teaser-card").then(
        (mod) => mod.TeaserCardContextDefault
      )
    )
  ),
  testimonials: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/testimonials").then(
        (mod) => mod.Testimonials
      )
    )
  ),
  testimonial: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/testimonial").then(
        (mod) => mod.TestimonialContextDefault
      )
    )
  ),
  text: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/text").then(
        (mod) => mod.TextContextDefault
      )
    )
  ),
  "image-text": editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/image-text").then(
        (mod) => mod.ImageTextContextDefault
      )
    )
  ),
  logos: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/logos").then(
        (mod) => mod.LogosContextDefault
      )
    )
  ),
  logo: editable(
    dynamic(() =>
      import("@kickstartds/ds-agency/logo").then(
        (mod) => mod.LogoContextDefault
      )
    )
  ),
};
