const queries = {
  // TODO: Add queriies for task projects

  /* CRUD ------------------------------------------------------------------ */

  createOneTask: `
    INSERT INTO public.tasks (
        project_id, task_id, title, description, start_at, end_at, tags
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
    ) RETURNING id;
  `,

  readOneTask: `
    SELECT * FROM public.tasks t
    WHERE t.id = $1;
  `,

  updateOneTask: `
    UPDATE public.tasks
    SET project_id = $2,
        yask_id = $3,
        title = $4,
        description = $5,
        start_at = $6,
        end_at = $7,
        tags = $8,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOneTask: `
    DELETE from public.tasks
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatestTasks: `
    SELECT * FROM public.tasks t
    ORDER BY t.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAllTasks: `
    SELECT * FROM public.tasks t
    ORDER BY t.created_at DESC;
  `,

  readAllTasksInYear: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
    ORDER BY t.created_at DESC;
  `,

  readAllTasksInMonth: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
    ORDER BY t.created_at DESC;
  `,

  readAllTasksInDay: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
        AND DATE_PART('day', t.created_at) = $3
    ORDER BY t.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', t.created_at) as year
    FROM public.tasks t
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', t.created_at) as month,
        DATE_PART('year', t.created_at) as year
    FROM public.tasks t 
    WHERE 
        DATE_PART('year', t.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', t.created_at) as day,
        DATE_PART('month', t.created_at) as month,
        DATE_PART('year', t.created_at) as year
    FROM public.tasks t 
    WHERE 
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
