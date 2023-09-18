import Task from "../src/components/Task";

describe('Task', () => {
  // Mocking the current date for testing
  const originalDateNow = Date.now;
  const mockDateNow = jest.fn(() => new Date('2023-01-15').getTime());

  beforeAll(() => {
    Date.now = mockDateNow;
  });

  afterAll(() => {
    Date.now = originalDateNow;
  });

  // Test case 1: Due date is in the future, task is not complete
  it('should return true if due date is in the future and task is not complete', () => {
    const futureDueDate = new Date('2023-01-20');
    const task = new Task(1, 'Sample Task', 'Task description', false, 'high', futureDueDate);
    expect(task.onTrack).toBe(true);
  });

  // Test case 2: Due date is in the past, task is not complete
  it('should return false if due date is in the past and task is not complete', () => {
    const pastDueDate = new Date('2022-12-31');
    const task = new Task(2, 'Sample Task', 'Task description', false, 'high', pastDueDate);
    expect(task.onTrack).toBe(false);
  });

  // Test case 3: Due date is in the past, but task is marked as complete
  it('should return true if due date is in the past but task is marked as complete', () => {
    const pastDueDate = new Date('2022-12-31');
    const task = new Task(3, 'Sample Task', 'Task description', true, 'high', pastDueDate);
    expect(task.onTrack).toBe(true);
  });
});
