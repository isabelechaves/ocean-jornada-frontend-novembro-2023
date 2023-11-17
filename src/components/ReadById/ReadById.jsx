import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ReadById() {
  const { id } = useParams()

  const [item, setItem] = useState({})

  async function carregarDadosApi() {
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItem(body)
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  // TODO: Exibir essas informações no JSX

  return <div>ReadById: {id} - {item.name}</div>
}