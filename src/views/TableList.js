const TableList = ({data}) => {
    return(
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
    {data.map((movie, index) => (
        <tr key={movie.title}>
      <th scope="row">{index + 1}</th>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>{movie.rating}</td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}

export default TableList