import { IconCorazon } from "../../../public/svg/IconCorazon";
import { IconSearch } from "../../../public/svg/IconSearch";
import { MenuBar } from "../../../public/svg/MenuBar";
import { ShopCar } from "../../../public/svg/ShopCar";

import styles from "./Header.module.css";

export const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logocenter}>
        <h1>MyMusic</h1>
      </div>

      <div className={styles.containerItems}>
        <MenuBar />
        <IconSearch />
      </div>

      <div className={styles.containerItems}>
        <ShopCar />
        <IconCorazon />
      </div>
    </div>
  );
};
