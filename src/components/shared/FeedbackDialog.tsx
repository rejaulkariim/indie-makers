import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const FeedbackDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-gray-200 px-3 py-2 text-xs rounded-full cursor-pointer">
          Feedback
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="space-y-4">
          <DialogTitle>Leave Feedback</DialogTitle>
          <DialogDescription>
            We&apos;d love to hear what went well or how we can improve the
            product experience.
          </DialogDescription>
        </DialogHeader>

        <Textarea
          className="focus-visible:ring-muted-foreground"
          placeholder="What if..."
        />

        {/* <div className="flex items-center gap-3">
          <div className="p-2 rounded-md border">☺️</div>
          <div className="p-2 rounded-md border">☹️</div>
          <div className="p-2 rounded-md border">☹️</div>
        </div> */}

        <DialogFooter>
          <Button type="submit" className="w-full">
            Sumbut
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
