import React from "react";
import cn from "classnames";
import styles from "./ProjectsFilter.module.scss";
import { SortByType } from "../../../../types/SortBy";

type Props = {
  onSortBy: (v: SortByType) => void;
  sortType: SortByType;
};

export const ProjectsFilter: React.FC<Props> = ({ onSortBy, sortType }) => {
  return (
    <div className={styles["projects-filter"]}>
      <button
        className={cn(styles["projects-filter__type"], {
          [styles["projects-filter__type--active"]]:
            sortType === SortByType.all,
        })}
        onClick={() => onSortBy(SortByType.all)}
      >
        Усі
      </button>

      <button
        className={cn(styles["projects-filter__type"], {
          [styles["projects-filter__type--active"]]:
            sortType === SortByType.interior,
        })}
        onClick={() => onSortBy(SortByType.interior)}
      >
        Iнтер`єр
      </button>

      <button
        className={cn(styles["projects-filter__type"], {
          [styles["projects-filter__type--active"]]:
            sortType === SortByType.architecture,
        })}
        onClick={() => onSortBy(SortByType.architecture)}
      >
        Aрхітектура
      </button>
    </div>
  );
};
