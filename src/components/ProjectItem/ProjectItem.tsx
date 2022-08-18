import styles from "./ProjectItem.module.scss";

interface Props {
  name: string;
  description: string;
  color: string;
}

function ProjectItem(props: Props) {
  return (
    <div
      className={styles.projects__item}
      style={{
        backgroundColor: props.color,
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className={styles.projects__item__buttons}>
        <button>
          <span>See Code</span>
        </button>
        <button>
          <span>Live Demo</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;