import axios from "axios";
import { toast } from "react-toastify";

type Options = {
  onSuccess: () => void;
  onError?: (err: any) => void;
};

const useUpdateTaskWithStatus = ({ onSuccess, onError }: Options) => {
  return async (path: string, data: any) => {
    try {
      await axios.put(`/tasks${path}`, data);
      toast.success("Task successfully updated ✅");
      onSuccess();
    } catch (err) {
      toast.error("Failed to update task ❌");
      console.error("Update error:", err);
      if (onError) onError(err);
    }
  };
};

export default useUpdateTaskWithStatus;
