import {useQueryClient} from 'react-query';

function Title() {
  const queryClient = useQueryClient();
  const title = queryClient.getQueryData('title-cached');
  return <h1>{title}</h1>;
}

export default Title;
