import { JobListings } from "./JobListings";
import { Pagination } from "./Pagination";

export function JobListingsSection({
  jobs,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) {
  return (
    <section>
      <h2>Resultados de búsqueda</h2>
      <JobListings jobs={jobs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
