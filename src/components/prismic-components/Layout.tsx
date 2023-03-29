import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
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
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};
