"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Castle, DoorOpen, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const palaceActions = [
  {
    id: "create",
    title: "Create a memory palace",
    description: "Start with a blank palace and shape the rooms around what you want to learn.",
    detail: "Best when you are building a new study path.",
    buttonText: "Start building",
    icon: Castle,
  },
  {
    id: "join",
    title: "Join an existing palace",
    description: "Enter a shared palace and continue from a structure someone already prepared.",
    detail: "Best when you have an invite code or class palace.",
    buttonText: "Join palace",
    icon: DoorOpen,
  },
] as const;

type PalaceAction = (typeof palaceActions)[number]["id"];

export function PalaceActionSelector() {
  const [selectedAction, setSelectedAction] = useState<PalaceAction>("create");
  const [inviteCode, setInviteCode] = useState("");
  const [status, setStatus] = useState("Create selected. Ready to start a new palace.");

  const selectedOption =
    palaceActions.find((action) => action.id === selectedAction) ?? palaceActions[0];
  const canContinue = selectedAction === "create" || inviteCode.trim().length > 0;

  function selectAction(action: PalaceAction) {
    setSelectedAction(action);
    setStatus(
      action === "create"
        ? "Create selected. Ready to start a new palace."
        : "Join selected. Add an invite code to continue.",
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedAction === "join" && !inviteCode.trim()) {
      setStatus("Enter an invite code before joining a palace.");
      return;
    }

    setStatus(
      selectedAction === "create"
        ? "Create flow selected. The palace builder can connect here next."
        : `Join flow selected for ${inviteCode.trim().toUpperCase()}.`,
    );
  }

  return (
    <section
      id="palaces"
      aria-labelledby="palace-choice-title"
      className="mx-auto w-full max-w-4xl"
    >
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-emerald-200/80 bg-white/25 text-emerald-700 shadow-sm backdrop-blur-md">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <h1
          id="palace-choice-title"
          className="text-4xl font-semibold text-zinc-950 sm:text-5xl"
        >
          Choose your memory palace path
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Build a new palace from scratch, or step into one that is already waiting for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          {palaceActions.map((action) => {
            const Icon = action.icon;
            const isSelected = selectedAction === action.id;

            return (
              <button
                key={action.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectAction(action.id)}
                className={cn(
                  "flex min-h-44 flex-col justify-between rounded-md border bg-white/30 p-5 text-left shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white/45 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                  isSelected
                    ? "border-emerald-600 bg-emerald-50/40 text-zinc-950"
                    : "border-zinc-200 text-zinc-700",
                )}
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      "rounded-sm border px-2 py-1 text-xs font-medium",
                      isSelected
                        ? "border-emerald-300 bg-white/70 text-emerald-700"
                        : "border-zinc-200 bg-white/45 text-zinc-500",
                    )}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </span>
                </span>

                <span>
                  <span className="block text-xl font-semibold text-zinc-950">
                    {action.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-zinc-600">
                    {action.description}
                  </span>
                  <span className="mt-4 block text-sm font-medium text-zinc-700">
                    {action.detail}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-md border border-white/50 bg-white/30 p-5 shadow-sm backdrop-blur-md">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-zinc-950">
                {selectedOption.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                {selectedOption.description}
              </p>

              {selectedAction === "join" ? (
                <label className="mt-4 block text-sm font-medium text-zinc-700">
                  Invite code
                  <input
                    type="text"
                    value={inviteCode}
                    onChange={(event) => setInviteCode(event.target.value)}
                    placeholder="PALACE-2026"
                    className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </label>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={!canContinue}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500"
            >
              {selectedOption.buttonText}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-4 text-sm text-zinc-600" role="status" aria-live="polite">
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
