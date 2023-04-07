import { Header } from "./Header/Header";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  children,
}: {
  navigation: any;
  settings: any;
  withHeaderDivider?: boolean;
  withProfile?: boolean;
  withSignUpForm?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
    </div>
  );
};
