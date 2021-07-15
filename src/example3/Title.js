import {useSelector} from 'react-redux';

function Title() {
  const {title} = useSelector((state) => state);
  return <h1>{title}</h1>;
}

export default Title;
