import { toast } from "../hooks/notify"

const Home = () => {
  return (
    <div>
        <button onClick={() => toast("Success!", "success")}>
        Test Toast
      </button>
    </div>
  )
}

export default Home