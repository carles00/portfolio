export default function Icon(props: {name: string, className?: string}) {
  return <span className={`material-symbols-outlined ${props.className}`}>{props.name}</span>;
}
