import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../Bounded/Bounded";
import { Heading } from "../Heading/Heading";
import { HorizontalDivider } from "../HorizontalDivider/HorizontalDivider";
import {
  titleContainer,
  profileSection,
  imgContainer,
  profileContainer,
  descriptionText,
  navItem,
  navContainer,
} from "./header.css";

const Profile = ({
  name,
  description,
  profilePicture,
}: {
  name: any;
  description: any;
  profilePicture: any;
}) => {
  return (
    <div className={profileSection}>
      <div className={profileContainer}>
        <PrismicLink href="/" tabIndex={-1}>
          <div className={imgContainer}>
            {prismicH.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                className="object-cover"
                alt=""
              />
            )}
          </div>
        </PrismicLink>
        {(prismicH.isFilled.richText(name) ||
          prismicH.isFilled.richText(description)) && (
          <div className={titleContainer}>
            {prismicH.isFilled.richText(name) && (
              <Heading>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <p className={descriptionText}>
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }: { children: React.ReactNode }) => {
  return <p className={navItem}>{children}</p>;
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}: {
  withDivider?: boolean;
  withProfile?: boolean;
  navigation: any;
  settings: any;
}) => {
  return (
    <Bounded size="widest">
      <nav className={navContainer}>
        <NavItem>
          <PrismicLink href="/">
            <PrismicText field={navigation.data.homepageLabel} />
          </PrismicLink>
        </NavItem>
        {navigation.data?.links.map((item: any) => (
          <NavItem key={prismicH.asText(item.label)}>
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </NavItem>
        ))}
      </nav>
      {withProfile && (
        <Profile
          name={settings.data.name}
          description={settings.data.description}
          profilePicture={settings.data.profilePicture}
        />
      )}
      {withDivider && <HorizontalDivider />}
    </Bounded>
  );
};
