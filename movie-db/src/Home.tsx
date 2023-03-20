import React, {FC} from 'react'
import Form from './SearchForm'
import Movies from './Movies'
const Home: FC = () => {
  return (
    <main>
      <Form />
      <Movies />
    </main>
  )
}

export default Home
