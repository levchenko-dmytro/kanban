import { Button, Flex, Input } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../StoreProvider/hooks/useAppDispatch"
import { useDebounce } from "../hooks/useDebounce"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { appActions } from "../reducers/appReducer"
import { checkUrlValidity } from "../helpers/checkUrlValidity"

interface PropsInter {
  setRepoUrl: Dispatch<SetStateAction<URL | undefined>>
}

const Form = ({ setRepoUrl }: PropsInter) => {
  const { inputValue } = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()
  const isUrlValid = checkUrlValidity(inputValue)

  const handleInputOnChange = useDebounce((e: ChangeEvent<HTMLInputElement>) => dispatch(appActions.setInputValue(e.target.value)), 500)

  return (
    <Flex mb={4} alignItems="center">
      <Input
        placeholder="Enter repo URL"
        defaultValue={inputValue}
        onChange={handleInputOnChange}
      />
      <Button
        onClick={() => isUrlValid && setRepoUrl(new URL(inputValue))}
        ml={2}
      >
        Load issues
      </Button>
    </Flex>
  )
}

export default Form
